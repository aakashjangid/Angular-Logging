package com.mcb.poc.angularlogging.controller;

import com.mcb.poc.angularlogging.data.LogData;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("logging")
@CrossOrigin("*")
public class LoggingController {

    @PostMapping("/getLogs")
    public void getLogsFromClient(@RequestBody LogData data){
        System.out.println(data.getMessage());
    }

    @GetMapping("/getData")
    public LogData getData() {
        LogData data = new LogData();
        data.setMessage("Dummy Message");
        return data;
    }

}
