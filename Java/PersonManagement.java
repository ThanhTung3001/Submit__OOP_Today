import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class PersonManagement implements AbstractInterface<Person>{

    public List<Person> datas = new ArrayList<>();
    @Override
    public void add(Person data) {
        datas.add(data);      
    }

    @Override
    public void findById(long id) {
        datas.forEach(data->{
            if(data.getId()==id){
               System.out.println(data.toString());
            }
        });
        
    }

    @Override
    public void deleteById(long id) {
        for (Iterator<Person> iter = datas.iterator(); iter.hasNext(); ) {
           Person ps = iter.next();
           if(ps.getId()==id){
               iter.remove();
           }
        }
        
    }

    @Override
    public void Update(long id, Person data) {
       datas.forEach(e->{
           if(id==e.getId()){
               e=data;
           }
       });
        
    }
    
}
