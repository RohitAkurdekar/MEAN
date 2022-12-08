db.Players.find();
db.Scores.find();
db.Teams.find();

db.createCollection("Players");

// Players Insert 
db.Players.insertOne(
            {
              "_id" : "1",
             "p_name" : "Rahul Dravid",
             "date_of_birth" : ISODate("1976-05-01T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "No",
             "medical_details" : {   "last_yoyo_date" : ISODate("2005-06-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Rajasthan Royals"
           }
);



db.Players.insertMany(
[
  {
              "_id" : "2",
             "p_name" : "Hardik Pandya",
             "date_of_birth" : ISODate("2013-07-11T00:00:00.000+0000"),
             "skill" : "All Rounder",
             "is_oversea_player" : "No",
             "medical_details" : {   "last_yoyo_date" : ISODate("2022-07-01T00:00:00.000+0000")
                                      , is_passed : "N"},
             "team_name" : "Mumbai Indians"
  },
    {
              "_id" : "3",
             "p_name" : "Sachin Tendulkar",
             "date_of_birth" : ISODate("1975-08-13T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "No",
             "medical_details" : {   "last_yoyo_date" : ISODate("2000-01-11T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Mumbai Indians"
    },
      {
              "_id" : "4",
             "p_name" : "Rishab Pant",
             "date_of_birth" : ISODate("2006-02-15T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "No",
             "medical_details" : {   "last_yoyo_date" : ISODate("2022-07-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Delhi Capitals"
       }
       ,
         {
              "_id" : "5",
             "p_name" : "Dhoni",
             "date_of_birth" : ISODate("1989-01-16T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "No",
             "medical_details" : {   "last_yoyo_date" : ISODate("2018-05-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Delhi Capitals"
           }
         ,
           {
              "_id" : "6",
             "p_name" : "David Warner",
             "date_of_birth" : ISODate("1985-05-01T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "Yes",
             "medical_details" : {   "last_yoyo_date" : ISODate("2022-08-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Delhi Capitals"
           }
           ,
             {
              "_id" : "7",
             "p_name" : "Rabada",
             "date_of_birth" : ISODate("1991-05-01T00:00:00.000+0000"),
             "skill" : "Bowler",
             "is_oversea_player" : "Yes",
             "medical_details" : {   "last_yoyo_date" : ISODate("2021-05-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Delhi Capitals"
           }
           ,
             {
              "_id" : "8",
             "p_name" : "Shane Watson",
             "date_of_birth" : ISODate("1995-05-01T00:00:00.000+0000"),
             "skill" : "All Rounder",
             "is_oversea_player" : "Yes",
             "medical_details" : {   "last_yoyo_date" : ISODate("1999-05-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Mumbai Indians"
           }
            ,
             {
              "_id" : "9",
             "p_name" : "Bumrah",
             "date_of_birth" : ISODate("1995-05-01T00:00:00.000+0000"),
             "skill" : "Bowler",
             "is_oversea_player" : "No",
             "medical_details" : {   "last_yoyo_date" : ISODate("2021-11-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Mumbai Indians"
           },
             {
              "_id" : "10",
             "p_name" : "Root",
             "date_of_birth" : ISODate("1996-03-01T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "Yes",
             "medical_details" : {   "last_yoyo_date" : ISODate("2021-11-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Mumbai Indians"
           }
             ,
                         
             {
              "_id" : "11",
             "p_name" : "Gayle",
             "date_of_birth" : ISODate("1978-08-01T00:00:00.000+0000"),
             "skill" : "Batsman",
             "is_oversea_player" : "Yes",
             "medical_details" : {   "last_yoyo_date" : ISODate("1996-11-01T00:00:00.000+0000")
                                      , is_passed : "Y"},
             "team_name" : "Delhi Capitals"
           }
             ,           
             {
              "_id" : "12",
             "p_name" : "Bolt",
             "date_of_birth" : ISODate("2001-05-01T00:00:00.000+0000"),
             "skill" : "Bowler",
             "is_oversea_player" : "Yes",
             "medical_details" : { "last_yoyo_date" : ISODate("2022-06-01T00:00:00.000+0000")
                                   , is_passed : "Y"},
             "team_name" : "Rajasthan Royals"
           }           
             
             
]
);
db.Players.find();

// Teams--> t_name,owner,budget, overseas_players(array which will contain overseas player)
db.createCollection("Teams");
db.Teams.insertMany(
[
{
              "_id" : "100",
             "t_name" : "Delhi Capitals",
             "owner" : "ACC Group",
             "budget" : 800,
             "overseas_players" : [{"p_name" : "Shane Watson"},{"p_name" : "Rabada"},{"p_name" : "David Warner"}]
},
{
              "_id" : "200",
             "t_name" : "Mumbai Indians",
             "owner" : "Ambani",
             "budget" : 1000,
             "overseas_players" : [{"p_name" : "Gayle"}]
},
{
              "_id" : "300",
             "t_name" : "Rajasthan Royals",
             "owner" : "MIT Group",
             "budget" : 900,
             "overseas_players" : [{"p_name" : "Bolt"},{"p_name" : "Root"}]
}
]
);
db.Teams.find();
// Scores --> p_name, skill, total_runs(if batting), total_wickets(if bowlers)
db.createCollection("Scores");    
db.Scores.insertMany(
[
{
             "p_name" : "Hardik Pandya",
             "skill" : "All Rounder",
             "total_runs" : "3500",
              "total_wickets" : null
},
{            
            "p_name" : "Sachin Tendulkar",
            "skill" : "Batsman",
             "total_runs" : "4000",

    
             },
{            
            "p_name" : "Rishab Pant",
            "skill" : "Batsman",
             "total_runs" : "2000",
    
             },


{            
            "p_name" : "Dhoni",
            "skill" : "Batsman",
             "total_runs" : "18000",
    
             },

{            
            "p_name" : "David Warner",
            "skill" : "Batsman",
             "total_runs" : "15000"
    
             },

{
             
             "p_name" : "Rabada",
              "skill" : "Bowler",
             "total_wickets" : "120",
             
},
{
             
             "p_name" : "Shane Watson",
              "skill" : "All Rounder",
             "total_wickets" : "120",
              "total_runs" : "13000"
             
},
{
             
             "p_name" : "Bumrah",
             "skill" : "Bowler",
             "total_wickets" : "150",

},
{
             
             "p_name" : "Root",
             "skill" : "Batsman",
             "total_runs" : "15150",

},
{
             
             "p_name" : "Gayle",
             "skill" : "Batsman",
             "total_runs" : "14150",

},
{
             
             "p_name" : "Bolt",
             "skill" : "Bowler",
             "total_wickets" : "30",

},
{
             
             "p_name" : "Rahul Dravid",
             "skill" : "Batsman",
             "total_runs" : "19150",

}


]
);
db.Scores.find();


------------------------------------------------------------------------------

------------------------------------------------------------------------------

//  Update all players total_runs who are batsman to 1000 runs
db.Scores.updateMany({},{$set:{}});

db.Scores.updateMany({skill: "Batsman"},{$set:{total_runs:1000}});

//{key:value}
//value : 12,"gaurav",{key:value},[{},{}]

// Update all players total_wickets who are bowlers to 1000 wickets
db.Scores.updateMany({skill: "Bowler"},{$set:{total_wickets: 1000}});

// update all players yoyo test passed status to failed 
db.Players.updateMany({},{$set:{"medical_details.is_passed" : "failed"}})

// add a new field named "category" to the Players collection with a default value of Outstanding
db.Players.updateMany({},{$set:{category : "Outstanding"}});

// add a new field named "homeGround" to the Teams collection with the default value null

db.Teams.updateMany({},{$set:{homeGround : null}});

// Update HomeGround field of Teams collection
// for Delhi Capitals --> Delhi
// for Mumbai Indians --> Mumbai
// for Rajasthan Royals --> Rajasthan

db.Teams.updateMany({"t_name" : "Delhi Capitals"},{$set:{homeGround : "Delhi"}});
db.Teams.updateMany({"t_name" : "Mumbai Indians"},{$set:{homeGround : "Mumbai"}});
db.Teams.updateMany({"t_name" : "Rajasthan Royals"},{$set:{homeGround : "Rajasthan"}});

// Add a new field "no_of_centuries"  with a default value of 5 to all batsman
db.Players.updateMany({skill: "Batsman"},{$set:{no_of_centuries : NumberInt(5)}});

// Add a new field "no_of_hatricks"  with a default value of 2 to all bowler
db.Players.updateMany({skill: "Bowler"},{$set:{no_of_hatricks : NumberInt(2)}});

// delete all players that belong to 'Delhi capitals'
db.Players.deleteMany({"team_name" : "Delhi Capitals"});

// delete players that were born before '01-12-1980'
db.Players.deleteMany({"date_of_birth" : {$lt  : ISODate("1980-12-01T00:00:00.000+0000")}});


// delete any one player that belong to 'Mumbai Indians'
db.Players.deleteOne({"team_name" : "Mumbai Indians"});


// increase all the teams budget by 60
// db.Teams.updateMany({},{$set : {budget : NumberInt(10000000)}})  

db.Teams.updateMany({}, {$mul : {budget : 1.6 }} ); // correct solution
// db.Teams.updateMany({},{$add :[ "$budget", 1]} ); 

 // just adds value 1 to the budget
// db.Teams.updateMany({},({$set : {budget : {$add : [{$multiply : [0.6,"$budget"]},"$budget"]}}}));


// google search for how to use $mul and $add together if its possible ?
//db.Teams.updateMany({},{$set : {budget : {"$sum" : { "$multiply" : ["$budget", 0.6]}}}});
//db.Teams.updateMany({},{$set : {budget :{ $add: [ "$budget",  { $mul: { budget: 0.6  }  }] }}});


// demo for full fledged select 
// 6) select address , count(*) my_cnt  [$project]
// 1) from customer  
// 2) where address in ('Pune','Bangalore','Chennai')   [$match]
// 3) group by address  [$group]
// 4) having count(*) > 1  [$match]
// 5) order by address desc  [$sort]

db.Players.aggregate(
    [
        {
            "$match" : {
                "date_of_birth" : {
                    "$gt" : ISODate("1980-12-01T00:00:00.000+0000")
                }
            }
        }, 
        {
            "$group" : {
                "_id" : "$skill",
                "total" : {
                    "$sum" : NumberInt(1)
                }
            }
        }, 
        {
            "$match" : {
                "total" : {
                    "$gt" : NumberInt(2)
                }
            }
        }, 
        {
            "$sort" : {
                "total" : 1.0
            }
        }, 
        {
            "$project" : {
                "Player_type" : "$_id",
                "total" : 1.0,
                "_id" : 0.0
            }
        }
    ]
);

// part of the query 
// Requires official MongoShell 3.6+
db = db.getSiblingDB("test");
db.test.find();
db.getCollection("Players").aggregate(
    [
        {
            "$match" : {
                "date_of_birth" : {
                    "$gt" : ISODate("1980-12-01T00:00:00.000+0000")
                }
            }
        }
    ]
);

db.createCollection("jabba");
db.jabba.insert({"_id":001,"name":"dabbu"});
db.jabba.find();
db.jabba.drop();

db = db.getSiblingDB("jabba");

db.createCollection("timepass");
db.timepass.find();


