from django.shortcuts import render

posts = [
    {
        'author':'J.H.C',
        'title':'Blog Post',
        'content': 'About life',
        'date_posted':'September 18, 2020'
    },
    {
        'author':'J.H.C',
        'title':'Blog Post',
        'content': 'About Wisdom',
        'date_posted':'September 18, 2020'
    },
]

def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)

def about(request):
    return render(request, 'blog/about.html', {'title':'About'})