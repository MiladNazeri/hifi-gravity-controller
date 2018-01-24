(function(){

    var counterList = [];

    var randomize;

    var currentSelectedId;

    function log(describer, text){
        text = text || '';
        print('&======');
        print(describer + ": ");
        print(JSON.stringify(text));
        print('======&');
    }

    function randomize(min,max){
        return Math.random() * (max - min) + min;
    }

    function getProps(id, arrayToGet){
        var props = {};
        if (arrayToGet.length > 0) {
            props = Entities.getEntityProperties(id, arrayToGet);
        } else {
            props = Entities.getEntityProperties(id);
        }
        return props;
    }

    function editGravity(id, gravityProps){
        var gravityPropsObj = {};
        if (gravityProps[0]) gravityPropsObj.x = gravityPropsObj[0];
        if (gravityProps[1]) gravityPropsObj.y = gravityPropsObj[1];
        if (gravityProps[2]) gravityPropsObj.z = gravityPropsObj[2];

        var props = {gravity: gravityPropsObj};

        Entities.editEntity(id, props);
    }

    function castRay(event) {
        var pickRay = Camera.computePickRay(event.x, event.y);
        // In this example every entity will be pickable except the entities in the blacklist array
        // the third argument is the whitelist array,and the fourth and final is the blacklist array
        var pickResults = Entities.findRayIntersection(pickRay, true, [], [blackListBox]);

        // With below example, only entities added to whitelist will be pickable
        // var pickResults = Entities.findRayIntersection(pickRay, true, [whiteListBox], []);

        if (pickResults.intersects) {
            print("INTERSECTION!");
        }

    }

    // create a new controller mapping
    // get gravity getProps
    // edit gravity props
});
