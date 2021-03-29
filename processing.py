import numpy as np
import pandas as pd


# def first(dirname):
#     with open(dirname, 'rb') as f:
#         df = pd.read_csv(f)
    

#     video = df.groupby(['Name'])
#     video = video.sum(['Global_Sales'])
#     video = video.sort_values(by='Global_Sales', ascending=False)
#     video.to_csv("data/graph1_data.csv")



# def preprocess_2(dirname):      
#     with open(dirname, 'rb') as f:
#         df = pd.read_csv(f)

#     del df['Rank']
#     del df['Name']
#     del df['Platform']
#     del df['Year']
#     del df['Publisher']
#     del df['Global_Sales']


#     genre = df.groupby(['Genre'])
#     genre = genre.sum(['NA_Sales', 'EU_Sales', 'JP_Sales', 'Other_Sales' ])

#     return genre


# def split_genre(dirname):
#     with open(dirname, 'rb') as f:
#         df = pd.read_csv(f)

#     del df['Rank']
#     del df['Name']
#     del df['Platform']
#     del df['Year']
#     del df['NA_Sales']
#     del df['EU_Sales']
#     del df['JP_Sales']
#     del df['Other_Sales']


#     df_action = df[df['Genre'] == "Action"]
#     df_action = df_action.groupby(['Publisher'])
#     df_action = df_action.sum(['Global_Sales'])
#     df_action = df_action.sort_values(by='Global_Sales', ascending=False)
#     df_action.to_csv("data/Action_data.csv")

#     df_adventure = df[df['Genre'] == "Adventure"]
#     df_adventure = df_adventure.groupby(['Publisher'])
#     df_adventure = df_adventure.sum(['Global_Sales'])
#     df_adventure = df_adventure.sort_values(by='Global_Sales', ascending=False)
#     df_adventure.to_csv("data/Adventure_data.csv")

#     df_fighting = df[df['Genre'] == "Fighting"]
#     df_fighting = df_fighting.groupby(['Publisher'])
#     df_fighting = df_fighting.sum(['Global_Sales'])
#     df_fighting = df_fighting.sort_values(by='Global_Sales', ascending=False)
#     df_fighting.to_csv("data/Fighting_data.csv")

#     df_misc = df[df['Genre'] == "Misc"]
#     df_misc = df_misc.groupby(['Publisher'])
#     df_misc = df_misc.sum(['Global_Sales'])
#     df_misc = df_misc.sort_values(by='Global_Sales', ascending=False)
#     df_misc.to_csv("data/Misc_data.csv")

#     df_platform = df[df['Genre'] == "Platform"]
#     df_platform = df_platform.groupby(['Publisher'])
#     df_platform = df_platform.sum(['Global_Sales'])
#     df_platform = df_platform.sort_values(by='Global_Sales', ascending=False)
#     df_platform.to_csv("data/Platform_data.csv")

#     df_puzzle = df[df['Genre'] == "Puzzle"]
#     df_puzzle = df_puzzle.groupby(['Publisher'])
#     df_puzzle = df_puzzle.sum(['Global_Sales'])
#     df_puzzle = df_puzzle.sort_values(by='Global_Sales', ascending=False)
#     df_puzzle.to_csv("data/Puzzle_data.csv")

#     df_racing = df[df['Genre'] == "Racing"]
#     df_racing = df_racing.groupby(['Publisher'])
#     df_racing = df_racing.sum(['Global_Sales'])
#     df_racing = df_racing.sort_values(by='Global_Sales', ascending=False)
#     df_racing.to_csv("data/Racing_data.csv")

#     df_role = df[df['Genre'] == "Role-Playing"]
#     df_role = df_role.groupby(['Publisher'])
#     df_role = df_role.sum(['Global_Sales'])
#     df_role = df_role.sort_values(by='Global_Sales', ascending=False)
#     df_role.to_csv("data/Role-Playing_data.csv")

#     df_shooter = df[df['Genre'] == "Shooter"]
#     df_shooter = df_shooter.groupby(['Publisher'])
#     df_shooter = df_shooter.sum(['Global_Sales'])
#     df_shooter = df_shooter.sort_values(by='Global_Sales', ascending=False)
#     df_shooter.to_csv("data/Shooter_data.csv")

#     df_simulation = df[df['Genre'] == "Simulation"]
#     df_simulation = df_simulation.groupby(['Publisher'])
#     df_simulation = df_simulation.sum(['Global_Sales'])
#     df_simulation = df_simulation.sort_values(by='Global_Sales', ascending=False)
#     df_simulation.to_csv("data/Simulation_data.csv")

#     df_sports = df[df['Genre'] == "Sports"]
#     df_sports = df_sports.groupby(['Publisher'])
#     df_sports = df_sports.sum(['Global_Sales'])
#     df_sports = df_sports.sort_values(by='Global_Sales', ascending=False)
#     df_sports.to_csv("data/Sports_data.csv")

#     df_strategy = df[df['Genre'] == "Strategy"]
#     df_strategy = df_strategy.groupby(['Publisher'])
#     df_strategy = df_strategy.sum(['Global_Sales'])
#     df_strategy = df_strategy.sort_values(by='Global_Sales', ascending=False)
#     df_strategy.to_csv("data/Strategy_data.csv")


def main(data_path):

    # data = preprocess_2(data_path)
    # data.to_csv("data/graph2_data.csv")
    # split_genre(data_path)
    # first(data_path)



if __name__=='__main__':
    # Make sure that the data path is correct!
    main("data/video_games.csv")
