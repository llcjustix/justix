from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import *


# class Index(ListView):
#     model = Category
#     template_name = 'landing/index.html'
#     context_object_name = 'menus'
#
#     def get_context_data(self, *, object_list=None, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['title'] = 'Титуль'
#         return context
#
#
# class Team(ListView):
#     model = Team
#     template_name = 'landing/index.html'
#     context_object_name = 'teams'
#
#     def get_context_data(self, *, object_list=None, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['full_name'] = 'команда'
#         return context

def index(request):
    menus = Category.objects.all()
    teams = Team.objects.all()
    main = Main.objects.all()
    services = Services.objects.all()
    prices = Prices.objects.all()
    mains = Main.objects.all()
    context = {
        'menus': menus,
        'teams': teams,
        'main': main,
        'services': services,
        'prices': prices,
        'mains': mains,
    }
    return render(request, template_name='landing/index.html', context=context)
