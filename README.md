epoxy is a binding "framework". It's created using typescript, it should be very easy to understand and use.

The dependency is kept at a minimum. Currently it only depends on jquery for the test.ts file.


How does it work
===

The basic idea is that it binds some HTML fields to a javascript model. When ever the fields changes so does the model.

It provides a Service interface that has two methods that should be implemented. 

* validate
	
    The validate method is executed to validate the model. 

* execute
	
    Execute the model, this could be a post to a server.



This basic idea is illustrated in the test.html and test.ts file.

Installation
===

First install Typescript, this can be done on most system with the following command
   
```npm install -g typescript```

Now compile the typescript files, using the tsc command

```tsc *.ts```


Example
===

Check out exmaple.html, for a very simple example on using epoxy.
