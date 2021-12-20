public class Student extends Person {
   
    private float mathScore; 
    private float physicScore;
    private float chemistryScore;
 
    public Student(long id, String firstName, String lastName, int age, String phoneNumber, String iccid) {
        super(id, firstName, lastName, age, phoneNumber, iccid);
      
    }
    public void setMathScore(float mathScore){
       this.mathScore = mathScore;
    }
    public float getMathScore(){
        return this.mathScore;
    }
    public float getPhysicScore (){
        return this.physicScore;
    }
    public void setPhysicScore(float physicScore){
        this.physicScore= physicScore;
    }
    public void setChemistryScore( float chemistryScore)
    {
       this.chemistryScore = chemistryScore;
    }
    public float getChemistryScore(){
        return this.chemistryScore;
    }
    public float MediumScore(){
        return (mathScore+chemistryScore+physicScore)/3;
    }
}
