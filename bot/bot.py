import os
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, KeyboardButton
from telegram.ext import(
    Updater,
    CommandHandler,
    CallbackContext,
    CallbackQueryHandler,
    
)

from dotenv import load_dotenv
load_dotenv(".env")
keyApi = os.environ.get("KEY_API")

enquetes = ["Gosta de pizza?","Gosta de sorvete?","Você gosta de rocky?"]

numeros = [""]

def start(update:Updater,context:CallbackContext):
    print(update)
    userID = update.message.chat.id
    if update.effective_chat.username not in numeros:
        context.bot.send_message(
            chat_id=userID,
            text="Usuario não pode votar",
        )

    userID = update.message.chat.id
    context.bot.send_message(
        chat_id=userID,
        text=enquetes,
    )

def escolha(update:Updater,context:CallbackContext):
    userID = update.message.chat.id
    
    listaEnquete = []
    for enquete in enquetes:
        listaEnquete.append([InlineKeyboardButton(enquete,callback_data=enquete)])
    
    userID = update.message.chat.id
    context.bot.send_message(
        chat_id=userID,
        text="Enquetes disponíveis:",
        reply_markup = InlineKeyboardMarkup(listaEnquete)
    )


def enqueteVoto(update: Updater, context:CallbackContext):
    query = update.callback_query
    query.answer()
    enqueteEscolhida = query.data
    query.edit_message_text(text=f"Enquete: {enqueteEscolhida}")

    keyboard = [[
            InlineKeyboardButton("Sim", callback_data="Sim"),
            InlineKeyboardButton("Não", callback_data="Não"),
            ]]

    querydata = update.callback_query
    userID = querydata.message.chat.id

    context.bot.send_message(
        chat_id=userID,
        text=enqueteEscolhida,
        reply_markup = InlineKeyboardMarkup(keyboard)
    )

updater = Updater(token=keyApi)
dispatcher = updater.dispatcher

dispatcher.add_handler(CommandHandler("start",start))
dispatcher.add_handler(CommandHandler("enq",escolha))
dispatcher.add_handler(CallbackQueryHandler(enqueteVoto))

updater.start_polling()
updater.idle()
