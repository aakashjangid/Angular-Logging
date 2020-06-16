package com.mcb.poc.angularlogging.data;

import java.util.List;

public class LogData {

//    level: NgxLoggerLevel;
    private int level;
    private String timestamp;
    private String fileName;
    private String lineNumber;
    private String message;
//    private List<Object> additional;

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getLineNumber() {
        return lineNumber;
    }

    public void setLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

//    public List<Object> getAdditional() {
//        return additional;
//    }
//
//    public void setAdditional(List<Object> additional) {
//        this.additional = additional;
//    }
}
