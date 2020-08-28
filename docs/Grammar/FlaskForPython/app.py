from flask import Flask, render_template
from quotes import MakeSoup, GenThreeInt
import time
import atexit
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

quote_text = []
quote_author = []

quote_text, quote_author = MakeSoup("https://www.goodreads.com/quotes")
print("first load")

def quotes():
    global quote_text
    global quote_author
    quote_text, quote_author = MakeSoup("https://www.goodreads.com/quotes")
    print("after 1h load")

scheduler = BackgroundScheduler()
scheduler.add_job(quotes, trigger="interval", seconds=3600)
scheduler.start()    
    
@app.route('/')
def index():
    
    return render_template('index.html', title="Jeho", quote1_text=quote_text, quote1_author=quote_author)

atexit.register(lambda: scheduler.shutdown())

if( __name__ == "__main__"):
    app.run(debug=True)
