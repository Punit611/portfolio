export class CoursesService{
  courses = [
      { id:101, name:'College App', github: 'https://github.com/Punit611/CollegeEngagement', duration: 0.5, type: 'Solo Project', 
        ratings: 4.0, image:'./assets/college.png',
        description: 'Developed an interactive college website in which user can post articles and also able to read and comment on other’s articles. Also, provided a search feature based on usernames and delete feature which only author of article can use.\n Technology used: EJS, CSS, JavaScript, NodeJS, MongoDBDeveloped an interactive college website in which user can post articles and also able to read and comment on other’s articles. Also, provided a search feature based on usernames and delete feature which only author of article can use. Technology used: EJS, CSS, JavaScript, NodeJS, MongoDB \n Skills: Full-Stack Development · Node.js · JavaScript · Express.js · MongoDB · Postman API · HTML5 · css',
        link:"https://college-engagement-app-t0y2.onrender.com/"
      },
      { id:102, name:'Quiz for All', github: 'https://github.com/Punit611/Quiz', duration: 1, type: 'Solo Project', 
        ratings: 4.5, image:'./assets/quiz.png',
        description: 'Web app on which user can create quiz with full control on questions, time and score for each question. Quiz creator can share quiz link with others and can access their scores.After ending quiz user can check score. Tech: EJS,JS,NodeJS,MongoDB.Web app on which user can create quiz with full control on questions, time and score for each question. Quiz creator can share quiz link with others and can access their scores.After ending quiz user can check score. Tech: EJS,JS,NodeJS,MongoDB. Skills: Full-Stack Development · Node.js · Express.js · MongoDB · Postman API · Embedded JavaScript (EJS) · HTML5 · css',
        link:"https://take-quiz.onrender.com/"
    },
      { id:103, name:'Problem Tagger', github: 'https://github.com/Punit611/Problem_tagger', duration: 2, type: 'Solo Project', 
        ratings: 4.0, image:'./assets/problem.png',
        description: 'Developed an interactive problem tagger webpage which allows users to read problems and tag  them. User can filter problem by applying multiple tags and logged in users are also able to add problems. Users have a profile page that includes personal information as well as all questions and tags added  by the user. A user can change their password, name, and profile photo. Technology used: EJS, CSS, JavaScript, NodeJS, MongoDB.Developed an interactive problem tagger webpage which allows users to read problems and tag them. User can filter problem by applying multiple tags and logged in users are also able to add problems. Users have a profile page that includes personal information as well as all questions and tags added by the user. A user can change their password, name, and profile photo. Technology used: EJS, CSS, JavaScript, NodeJS, MongoDB. Skills: Full-Stack Development · Node.js · JavaScript · MongoDB · Postman API',
        link:"https://problem-tagger.onrender.com/"
      },
      { id:104, name:'Audio Prioritizer', github: 'https://github.com/Punit611/emotion-priritizer', duration: 2, type: 'Solo Project', 
        ratings: 4.8, image:'./assets/audio.jfif',
        description: 'Project prioritizes audio files by detection the emotion of files. User can select particular emotions to  filter files. User can give rank to selected emotions. Then all filter files are arranged in ranked order. Used librosa library for sampling and MLP Classifier for training our model. Achieved an accuracy of 74.58% in 75–25 dataset distribution. Finally, this model prioritizes file  indexes based on a given ranking. Technology used: Python, Librosa, Sklearn and Pyplot.Project prioritizes audio files by detection the emotion of files. User can select particular emotions to filter files. User can give rank to selected emotions. Then all filter files are arranged in ranked order. Used librosa library for sampling and MLP Classifier for training our model. Achieved an accuracy of 74.58% in 75–25 dataset distribution. Finally, this model prioritizes file indexes based on a given ranking. Technology used: Python, Librosa, Sklearn and Pyplot. Skills: Python · Machine Learning · Scikit-Learn',
        link:"https://github.com/Punit611/emotion-priritizer"
      }
    ];

    works=[
      {title:"Biz2Credit", role: "Software Engineer", start:"August,2023", end:"Present",Descp:"I am working as Software developer."},
    ];

    skillsData = [
      {
        'id': '1','skill': 'PYTHON',
        'progress': '90%'
        
      },
      {
        'id': '2','skill': 'C++',
        'progress': '90%'
        
      },
      {
        'id': '4','skill': 'JAVASCRIPT',
        'progress': '80%'
        
      },
      {
        'id': '5','skill': 'SQL , MYSQL',
        'progress': '75%'
      },
      {
        'id': '6','skill': 'NODE JS',
        'progress': '60%'
        
      },
      {
        'id': '7','skill': 'ANGULAR',
        'progress': '75%'
        
      },
      {
        'id': '8','skill': 'ExpressJs',
        'progress': '50%'
        
      },
      {
        'id': '9','skill': 'MONOGODB',
        'progress': '50%'
        
      },
      {
        'id': '10','skill': 'REACT JS',
        'progress': '275%'
        
      },
      {
        'id': '8','skill': 'MEAN Stack',
        'progress': '70%'        
      },
      {
        'id': '8','skill': 'MERN Stack',
        'progress': '75%'
        
      },
      {
        'id': '8','skill': 'Django',
        'progress': '60%'
        
      },
    ];
}