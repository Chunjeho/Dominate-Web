import requests
from bs4 import BeautifulSoup
import random
import csv

def read_file(randList):
    quote_text = []
    quote_author = []
    box = []
    with open('quotes.csv', 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            if(len(row) != 0):
                box.append(row)
        print(box)
        for num in randList:
            print("\n index: " + str(num))
            print("\n content: " + str(box[num]))
            quote_text.append(box[num][0])
            quote_author.append(box[num][1])
    return quote_text, quote_author

def save_to_file(quotes):
    file = open("quotes.csv", mode="w")
    writer = csv.writer(file)
    writer.writerow(["text", "author"])
    for i in range(len(quotes)):
        writer.writerow([quotes[i][0], quotes[i][1]])
    return 

def GenThreeInt(length):
    a = random.randrange(2,length+1)
    while(1):
        b = random.randrange(2,length+1)
        if(b != a):
            break

    while(1):
        c = random.randrange(2,length+1)
        if(c != a and c != b):
            break
    return [a, b, c]

def MakeSoup(url):
    quote_text = []
    quote_author = []
    bowl = []
    result = requests.get(url)
    print("requesting...")
    soup = BeautifulSoup(result.text, "html.parser")
    for s in soup.select('script'):
        s.extract()
    length, quotes = ExtractQuotes(soup)
    bowl.append(quotes)
    
    save_to_file(quotes)
    print("save to csv file")
    
    return length, GenThreeInt(length)


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

    return len(quote_content), quotes