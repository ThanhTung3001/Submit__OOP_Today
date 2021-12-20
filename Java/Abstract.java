
public class Abstract {

    /**
     *
     */
    private static final String N = "\n";

    public Abstract(long id, String firstName, String lastName, int age, String phoneNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    private long id;
    private String firstName;
    private String lastName;
    private int age;
    private String phoneNumber;

    public void setId(int id) {
        this.id = id;
    }

    public long getId() {
        return this.id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;

    }

    public String getFirstName(String firstName) {
        return this.firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public Abstract() {

    }

    @Override
    public String toString() {
        return this.id + N + this.firstName + N + this.lastName + N + this.phoneNumber + N;
    }

}