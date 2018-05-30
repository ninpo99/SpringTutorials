package rc.SpringBootKotlinDemo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HotelJava {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private int classification;
    private int nbRooms;
    private int nbrFreeRooms;

    public HotelJava(String name, int classification, int nbRooms){
        this.name = name;
        this.classification = classification;
        this.nbRooms = nbRooms;
    }

    public void checkIn(){

    }

    public void checkOut(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getClassification() {
        return classification;
    }

    public void setClassification(int classification) {
        this.classification = classification;
    }

    public int getNbRooms() {
        return nbRooms;
    }

    public void setNbRooms(int nbRooms) {
        this.nbRooms = nbRooms;
    }

    public int getNbrFreeRooms() {
        return nbrFreeRooms;
    }

    public void setNbrFreeRooms(int nbrFreeRooms) {
        this.nbrFreeRooms = nbrFreeRooms;
    }
}
