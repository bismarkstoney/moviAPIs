def buildApp(){
    echo 'Building the application'
}
def deployApp(){
     echo 'deploying the application'
     echo "deploying version ${params.VERSION}"
}

def testApp(){
     echo 'testing the application'  
}

return this
