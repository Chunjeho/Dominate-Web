from flask import Flask, render_template
from quotes import MakeSoup, GenThreeInt

app = Flask(__name__)

@app.route('/')
def index():
    quote_text, quote_author = MakeSoup("https://www.goodreads.com/quotes")
    
    return render_template('index.html', title="Jeho", quote1_text=quote_text, quote1_author=quote_author)

@app.route("/login", methods=["POST", "GET"])
def login():
    return render_template()

if( __name__ == "__main__"):
    app.run(debug=True)