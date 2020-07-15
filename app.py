#import eel
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

from flask import Flask
app = Flask(__name__)


#eel.init('src')
metadata =pd.read_csv('steam_games.csv', low_memory=False)

tfidf = TfidfVectorizer(stop_words='english')
metadata['desc_snippet']= metadata['desc_snippet'].fillna('')

tfidf_matrix = tfidf.fit_transform(metadata['desc_snippet'])

cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

indices = pd.Series(metadata.index, index = metadata['name']).drop_duplicates()

@app.route("/")
#@eel.expose
def get_recommendations(name, consine_sim = cosine_sim):
    idx = indices[name]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse = True)
    # sim_scores = sim_scores[1:11]
    sim_scores = sim_scores[1]


    game = [i[0] for i in sim_scores]
    return metadata['name'].iloc[game]

if __name__ == "__main__":
    app.run(debug=True)

#eel.start('Search.html')

# print(get_recommendations('DOOM'))

