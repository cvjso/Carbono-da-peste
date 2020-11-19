import pandas as pd
import matplotlib.pyplot as plt
import plotly.express as px

def transform(tipo:str):
    total = pd.read_csv("/resources/"+tipo+".csv")
    change = pd.read_excel('/resources/owid-co2-data.xlsx')
    x = 0
    y = 0
    while x != 193:
        y = 0
        for i in change['country']:
            if i == total['Country/Region'][x]:
                total['Country/Region'][x] = change['iso_code'][y]
                break
            y+=1
        x+=1

    return total


def grafico_linha(tipo:str, pais:str):
    total = pd.read_csv("/resources/"+tipo+".csv")
    result = total.sort_values(by='2016', ascending=False)
    result = result.transpose()
    result = result.to_dict()
    for i in result:
        if result[i]['Country/Region'] == pais:
            return result[i]

def grafico_princial(tipo,ano):
    total = pd.read_csv("/resources/"+tipo+".csv")
    result = total.sort_values(by=ano, ascending=False)
    result = result.to_dict()
    dic = {}
    for i in result:
        if i == ano:
            dic[i] = result[i]
    dic2 = {}
    for i in dic[ano]:
        if len(dic[ano].keys()) == len(result["Country/Region"].keys()):
            dic2[result["Country/Region"][i]] = dic[ano][i]
    return dic2

