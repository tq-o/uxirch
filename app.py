#import eel
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

from flask import Flask
app = Flask(__name__)


metadata =pd.read_csv('steam_games.csv', low_memory=False)

tfidf = TfidfVectorizer(stop_words='english')
metadata['desc_snippet'] = metadata['desc_snippet'].fillna('')

tfidf_matrix = tfidf.fit_transform(metadata['desc_snippet'])

cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

indices = pd.Series(metadata.index, index = metadata['name']).drop_duplicates()

def get_recommendations(name, cosine_sim = cosine_sim):
    idx = indices[name]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse = True)
    sim_scores = sim_scores[1:11]
    # sim_scores = sim_scores[1]


    game = [i[0] for i in sim_scores]
    res = metadata['name'].iloc[game]
    temp = []
    for ele in res:
        temp.append(ele)
    return temp
    # return metadata['name'].iloc[game]

@app.route("/")
#@eel.expose
def print_out():
    return str(get_recommendations("DOOM"))


if __name__ == "__main__":
    app.run()

