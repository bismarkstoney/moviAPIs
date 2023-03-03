
pipeline {
  agent any
 
  parameters {
    string (name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
    choice(name: 'VERSION', choices: ['1.10', '1.2.0', '1.3.0'], description: '' )
    booleanParam(name: 'excuteTests', defaultValue: true, description: '')
  }
  stages {

    stage("init"){
    
        steps {
           echo 'Intialize the project'
      
        }
    }
    stage("build"){
    
        steps {
         echo 'build the project'
      
        }
    }
    
    stage("test"){
     
      steps {
           echo 'Testing the app'
      
      }
    }
    stage("deploy"){
        steps{
          echo 'deploy the app'
            
        }
    }
  }


}
