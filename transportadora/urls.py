from django.contrib import admin
from django.urls import path
from transportadoraapp import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home'),
    path('edit_perfil', views.edit_perfil, name ='edit_perfil')
]
