public class Person extends Abstract {
    private String iccid;

    public Person(long id, String firstName, String lastName, int age, String phoneNumber, String iccid) {
        super(id, firstName, lastName, age, phoneNumber);
        this.iccid = iccid;
    }

    public String getIccID() {
        return this.iccid;
    }

    public void setIccId(String iccid) {
        this.iccid = iccid;
    }
}
// if u want format code . u can using ctr+A and alter Ctr+alt+shift+ F
