from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'homepage/home.html')

def edit_perfil(request):
    return render(request, 'perfil_usuario/editar_perfil_usuario.html')

def encomenda(request):
    return render(request, 'perfil_usuario/encomendas.html')

def transport(request):
    return render(request, 'transport/transport.html')