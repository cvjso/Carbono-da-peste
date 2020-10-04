import pandas as pd
import matplotlib.pyplot as plt
import plotly.express as px

def transform(tipo:str):
    total = pd.read_csv("aplication/api/resources/"+tipo+".csv")
    change = pd.read_excel('aplication/api/resources/owid-co2-data.xlsx')
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

# def grafico_princial(tipo:str, ano:str):
#     """
#     tipo: Waste, Bunkerfuel, Agriculture, Land-Use Change And Forestry , Energy, Industrial process, All
#     ano: 1990 - 2016
#     """
#     x = transform(tipo)
#     fig = px.scatter_geo(x.head(10), locations="Country/Region",size=ano , color = ano, size_max = 40)
#     return fig.show()

def grafico_linha(tipo:str, ano:str):
    total = pd.read_csv("aplication/api/resources/"+tipo+".csv")

    isa = total.sort_values(by=ano, ascending=False)
    isa = isa.head(10)
    isa = isa.transpose()
    index = list(isa.index.values)

    for i in range(len(index)):
        if i > 1:
            index[i] = int(1988+i)

    for i in isa:
        plt.plot(index[2:],isa[i][2:], label = isa[i][0])
        plt.legend()
    return plt.show()

def grafico_princial(tipo,ano):
    total = pd.read_csv("aplication/api/resources/"+tipo+".csv")
    result = total.sort_values(by=ano, ascending=False)
    result = result.head(10)
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

# grafico_linha("ghg-emissions",'1990')
# grafico_princial("ghg-emissions",'1990')