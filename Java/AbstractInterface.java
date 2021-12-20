
public interface AbstractInterface <T>{
   
    public void add( T data);
    public void findById(long id);
    public void deleteById(long id);
    public void Update(long id, T data);
}
