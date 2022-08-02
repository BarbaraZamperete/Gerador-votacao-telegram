FROM python:3
COPY . /app
RUN pip install python-telegram-bot --pre && pip install python-dotenv && pip install requests && pip install pymongo
WORKDIR /app
CMD ["python3", "poll.py"]