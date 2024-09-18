Para instalar o ambiente virtual e suas depedencias siga os seguintes passos:

1º Crie o ambiente ".venv" a partir do comando:
  python -m venv .venv
  
2º Inicie a venv partir o comando:
  source .venv/bin/activate -- (Linux ou macOS) 
  .venv/Scripts/Activate (ou Activate.ps1 para Shell) -- (Windows)
  
3º Instale as depedencias a partir do arquivo "requeriments.txt"
  pip install -r requirements.txt

Para inicar o projeto basta digitar o comando no terminal: (obs: você tem que estar no mesmo diretorio do arquivo "manage.py")
  python manage.py runserver
Logo após acesse o endereço gerado.
