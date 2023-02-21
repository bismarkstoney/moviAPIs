
pipeline {
  agent any
 
  parameters {
    string (name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
    choice(name: 'VERSION', choices: ['1.10', '1.2.0', '1.3.0'], description: '' )
    booleanParam(name: 'excuteTests', defaultValue: true, description: '')
  }
  stages {
  
    stage("build"){
    
        steps {
            echo 'building the application'
            echo "building version ${NEW_VERSION}"
      
        }
    }
    
    stage("test"){
      when {
        expression {
             params.executeTests
        }
      }
      steps {
            echo 'testing the application'   
      
      }
    }
    stage("deploy"){
        steps{
            echo 'deploying the application'
            echo "deploying version ${params.VERSION}"
            
        }
    }
  }


}
