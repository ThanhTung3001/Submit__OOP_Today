public class Employee extends Person {

    public float baseSalary;
    public float bonus;
    public int dayOfWork;
    public int fullCode;
    public float factor;
    public Employee(long id, String firstName, String lastName, int age, String phoneNumber, String iccid) {
        super(id, firstName, lastName, age, phoneNumber, iccid);
    }
    public float salaryToTal(){
        return ((baseSalary/30)*dayOfWork+(bonus))*factor;
    }

    
}
