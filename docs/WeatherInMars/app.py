from flask import Flask, render_template
import requests

app = Flask(__name__)

def CtoF(cel):
    return round(cel*9.5+32, 1)

def FtoC(fah):
    return round((fah-32)*5/9, 1)

def meterTomile(meter):
    return round(meter/0.44704, 1)

def mileTometer(mile):
    return round(mile*0.44704, 1)

KEY = 'Wgcl7DC89dOjdeB4ZPPBADzO1mQa6bu03Y0QeixS'
type_list = ["av", "mn", "mx"]

temperature = {
    'av':{
        'c': -61.3,
        'f': CtoF(-61.3)
    },
    'mn':{
        'c': -61.3,
        'f': CtoF(-61.3)
    },
    'mx':{ 
        'c': -61.3,
        'f': CtoF(-61.3)
    }
}

wind = {
    'direction': "NEWS",
    'av':{
        'meter': 8,
        'mile': meterTomile(8)
    },
    'mn':{
        'meter': 4,
        'mile': meterTomile(4)
    },
    'mx':{ 
        'meter': 12,
        'mile': meterTomile(12)
    }
}

@app.route('/')
def index():
    temperature_json = requests.get(f"https://api.nasa.gov/insight_weather/?api_key={KEY}&feedtype=json&ver=1.0")
    
    t_json = temperature_json.json()
    print("json file: " + str(t_json))
    
    sol = t_json['sol_keys'][-1]
    print("sol: " + str(sol))
    
    wind['direction'] = t_json[sol]["WD"]["most_common"]["compass_point"]
    for _type in type_list:
        temperature[_type]['c'] = round(t_json[sol]["AT"][_type], 1)
        temperature[_type]['f'] = CtoF(t_json[sol]["AT"][_type])
        wind[_type]['meter'] = round(t_json[sol]["HWS"][_type], 1)
        wind[_type]['mile'] = meterTomile(t_json[sol]["HWS"][_type])
    
    return render_template('index.html', sol=sol, temperature = temperature, wind=wind)

if (__name__ == '__main__'):
    app.run(debug=True, host='172.30.1.19')