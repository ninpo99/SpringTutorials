package rc.SpringBootKotlinDemo

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Hotel(val name: String, val claissification: Int, val nbrRooms: Int){
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = 0
    var nbrFreeRooms: Int = this.nbrRooms

    constructor(): this("",0,0)

    fun checkIn(nbrGuests: Int){
        if(this.nbrFreeRooms >= nbrGuests){
            this.nbrFreeRooms -= nbrGuests
        }
    }

    fun checkOut(nbrGuests: Int){
        this.nbrFreeRooms += nbrGuests
    }
}
