import requests
from bs4 import BeautifulSoup
import random

def GenThreeInt(length):
    a = random.randrange(1,length)
    while(1):
        b = random.randrange(1,length)
        if(b != a):
            break

    while(1):
        c = random.randrange(1,length)
        if(c != a and c != b):
            break
    return [a, b, c]

def MakeSoup(url):
    quote_text = []
    quote_author = []
    bowl = []
    result = requests.get(url)
    soup = BeautifulSoup(result.text, "html.parser")
    for s in soup.select('script'):
        s.extract()
    length, quotes = ExtractQuotes(soup)
    bowl.append(quotes)
    
    for i in GenThreeInt(length):
        print(i, length)
        quote_text.append(quotes[i][0])
        quote_author.append(quotes[i][1])
    
    return quote_text, quote_author


def ExtractQuotes(soup):
    quote_box = soup.find_all("div",{"class":"quote"})
    quotes = []
    quote_content= []
    quote_author_list= []
    length = 0;
    for quote_text in quote_box:
        string = quote_text.find("div",{"class":"quoteText"}).get_text().strip()
        if(len(string) <= 350):
            length += 1
            for i in range(len(string)):
                if(string[i] == '”'):
                    quote_content.append(string[1:i-1])
                elif(string[i] == '―'):
                    quote_author_list.append(string[i+1:len(string)].strip().replace('\n',''))


    for i in range(len(quote_author_list)):
        quotes.append([quote_content[i], quote_author_list[i]])

    return length, quotes