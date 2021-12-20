public class Main {
    public static void main(String[] args) {
        PersonManagement management =  new PersonManagement();
        management.add(new Person(1, "TUng", "Thanh", 19, "09101818722", "231325691"));
         System.out.println(management.datas.get(0).toString());
    }
}
