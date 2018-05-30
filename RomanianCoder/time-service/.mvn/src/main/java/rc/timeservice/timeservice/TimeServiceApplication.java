package rc.timeservice.timeservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.GregorianCalendar;

@SpringBootApplication
@EnableScheduling
public class TimeServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimeServiceApplication.class, args);
	}

	@Scheduled(fixedRate = 5000)
	public void printDate(){
		System.out.println("Rc Time Service : " + new GregorianCalendar().getTime());
	}
}
