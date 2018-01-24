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



    // create a new controller mapping
    // get gravity getProps
    // edit gravity props
});
