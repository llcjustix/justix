from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='home'),
    # path('', Team.as_view(), name='home'),

]
