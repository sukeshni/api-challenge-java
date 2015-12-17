package challenge;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChallengeController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/challenge")
    public Challenge challenge(@RequestParam(value="name", defaultValue="Challenge") String name) {
        return new Challenge(counter.incrementAndGet(),
                            String.format(template, name));
    }
}