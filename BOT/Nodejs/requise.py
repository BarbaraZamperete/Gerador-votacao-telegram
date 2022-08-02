import requests
requisicao = requests.get('http://localhost:3001')

# print(requisicao)
print(requisicao.json())