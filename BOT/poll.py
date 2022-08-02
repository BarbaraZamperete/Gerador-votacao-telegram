import os
import dotenv
import logging
import requests
# import subprocess
# import sys


from telegram import __version__ as TG_VER

try:
    from telegram import __version_info__
except ImportError:
    __version_info__ = (0, 0, 0, 0, 0)  # type: ignore[assignment]

if __version_info__ < (20, 0, 0, "alpha", 1):
    raise RuntimeError(
        f"This example is not compatible with your current PTB version {TG_VER}. To view the "
        f"{TG_VER} version of this example, "
        f"visit https://docs.python-telegram-bot.org/en/v{TG_VER}/examples.html"
    )
from telegram import (
    KeyboardButton,
    KeyboardButtonPollType,
    Poll,
    ReplyKeyboardMarkup,
    ReplyKeyboardRemove,
    Update,
)
from telegram.constants import ParseMode
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    PollAnswerHandler,
    PollHandler,
    filters,
)

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)

dotenv.load_dotenv(".env")
keyApi = os.environ.get("KEY_API")

users = {}

from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongotest', 27017)
db = client['test'] 
connectionCollectionDB = db['votacaos']


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Inform user about what this bot can do"""
    await update.message.reply_text(
        "Please select /poll to get a Poll"
    )


async def poll(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends a predefined poll"""
    global users
    users = requests.get('http://app-web:4000/usuarios').json()
    logger.info(users['users'])
    req = requests.get('http://app-web:4000/poll').json()
    logger.info(req)
    _question = req['titulo']
    _answers = ["sim","Não"]
    # _is_anonymous = req['is_anonymous']
    # _allows_multiple_answers = req['allows_multiple_answers']
    # _open_period = req['open_period']
    message = await context.bot.send_poll(
        chat_id=update.effective_chat.id,
        question=_question,
        options=_answers,
        is_anonymous=False,
        allows_multiple_answers=False,
        open_period=60,
    )
    # Save some info about the poll the bot_data for later use in receive_poll_answer
    payload = {
        message.poll.id: {
            "questions": _answers,
            "message_id": message.message_id,
            "chat_id": update.effective_chat.id,
            "answers": 0,
        }
    }
    context.bot_data.update(payload)


async def receive_poll_answer(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Summarize a users poll vote"""
    answer = update.poll_answer
    answered_poll = context.bot_data[answer.poll_id]
    try:
        questions = answered_poll["questions"]
    # this means this poll answer update is from an old poll, we can't do our answering then
    except KeyError:
        return
    logger.info(update.poll_answer)

    # # Aqui você verifica se o usuário pode votar
    # logger.info(f"User - {update.effective_user}")
    logger.info(f"User - {update.effective_user.username}")
    if(update.effective_user.username not in users['users']):
        logger.info(f"O usuario {update.effective_user.username} não pode votar.")
        logger.info(update.effective_chat)
       

    selected_options = answer.option_ids
    answer_string = ""
    for question_id in selected_options:
        if question_id != selected_options[-1]:
            answer_string += questions[question_id] + " and "
        else:
            answer_string += questions[question_id]
    await context.bot.send_message(
        answered_poll["chat_id"],
        f"{update.effective_user.mention_html()} feels {answer_string}!",
        parse_mode=ParseMode.HTML,
    )
    answered_poll["answers"] += 1
    # Close poll after three participants voted
    if answered_poll["answers"] == 1:
        await context.bot.stop_poll(answered_poll["chat_id"], answered_poll["message_id"])
        logger.info(answered_poll)


async def help_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Display a help message"""
    await update.message.reply_text("Use /poll to test this bot.")


async def post_init(application: Application) -> None:
    question = "How are you?"
    answers = ["Good", "Really good", "Fantastic", "Great"]
    message = await application.bot.send_poll(
        chat_id=super_group_id,
        question=question,
        options=answers,
        is_anonymous=False,
        allows_multiple_answers=False,
        open_period=240,
    )
    # Save some info about the poll the bot_data for later use in receive_poll_answer
    payload = {
        message.poll.id: {
            "questions": answers,
            "message_id": message.message_id,
            "chat_id": super_group_id,
            "answers": 0,
        }
    }
    application.bot_data.update(payload)


def main() -> None:
    """Run bot."""
    # Create the Application and pass it your bot's token.
    application = Application.builder().token(keyApi).build()
    # application = Application.builder().token(keyApi).post_init(post_init).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("poll", poll))
    application.add_handler(CommandHandler("help", help_handler))
    application.add_handler(PollAnswerHandler(receive_poll_answer))

    # Run the bot until the user presses Ctrl-C
    application.run_polling()


if __name__ == "__main__":
    main()
