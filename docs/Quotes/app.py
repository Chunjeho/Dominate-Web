from flask import Flask, render_template
from quotes import MakeSoup, GenThreeInt, read_file
import time
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
import csv

app = Flask(__name__)

quote_text = []
quote_author = []
length = 0
randList = []

def first():
    global quote_text
    global quote_author
    global length
    global randList
    
    length, randList = MakeSoup("https://www.goodreads.com/quotes")
    print("first load number: " + str(randList[:]))
    quote_text, quote_author = read_file(randList)

def quotes():
    randList = GenThreeInt(length)
    quote_text, quote_author = read_file(randList)   

@app.before_first_request
def init_scheduler():
    print("before first request")
    first()
    scheduler = BackgroundScheduler()
    scheduler.add_job(quotes, trigger="interval", seconds=300)
    scheduler.start()     
    atexit.register(lambda: scheduler.shutdown())

@app.route('/')
def index():
    return render_template('index.html', quote1_text=quote_text, quote1_author=quote_author)

if( __name__ == "__main__"):
    app.run(debug=True)