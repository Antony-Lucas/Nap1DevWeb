from django.contrib import admin
from django.urls import path
from transportadoraapp import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home')
]
