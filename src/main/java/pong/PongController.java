package pong;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PongController {
    
    @RequestMapping(value = {"/", "/start"})
    public String index() {
        return "index";
    }
    
    
}
