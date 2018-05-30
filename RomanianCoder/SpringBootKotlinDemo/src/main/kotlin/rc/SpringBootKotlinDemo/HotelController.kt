package rc.SpringBootKotlinDemo

import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/hotels")
class HotelController(val hotelRepository: HotelRepository){

    @GetMapping("/all")
    fun all(): MutableIterable<Hotel> = this.hotelRepository.findAll()

    @GetMapping("/{name}")
    fun byName(@PathVariable(value = "name")name: String): List<Hotel>{
        val hotelsByName = this.hotelRepository.findByName(name)
        return hotelsByName
    }

    @PostMapping("/checkIn")
    fun checkIn(@RequestBody checkInRequest: CheckInRequest){
        val hotel = this.hotelRepository.findByName(checkInRequest.hotelName).get(0)
        hotel.checkIn(checkInRequest.nbrGuests)
        this.hotelRepository.save(hotel)
    }
}