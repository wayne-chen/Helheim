var cameraSpeed = 25.00;
var turnSpeed = 5.00;
var interfaceSize = 25;
var target : Transform;
var relativePos : Vector3;

function Update () {
var screenBottom = Rect (0, 0, Screen.width, interfaceSize);
var screenTop = Rect (0, Screen.height-interfaceSize, Screen.width, interfaceSize);
var screenLeft = Rect (0, 0, interfaceSize, Screen.height);
var screenRight = Rect (Screen.width-interfaceSize, 0, interfaceSize, Screen.height);

	if (screenBottom.Contains(Input.mousePosition))
		transform.Translate(relativePos.back * Time.deltaTime * cameraSpeed, Space.Self);

	if (screenTop.Contains(Input.mousePosition))
		transform.Translate(relativePos.forward * Time.deltaTime * cameraSpeed, Space.Self);

	if (screenLeft.Contains(Input.mousePosition))
		transform.Translate(relativePos.left * Time.deltaTime * cameraSpeed, Space.Self);

	if (screenRight.Contains(Input.mousePosition))
		transform.Translate(relativePos.right * Time.deltaTime * cameraSpeed, Space.Self);

	if (Input.GetButton("Rotate Camera Right"))
		transform.Rotate(relativePos.up * Time.deltaTime * turnSpeed, Space.World);

	if (Input.GetButton("Rotate Camera Left"))
		transform.Rotate(relativePos.down * Time.deltaTime * turnSpeed, Space.World);

	if(Input.GetKey(KeyCode.W))
		transform.Translate(new Vector3(0, 0, cameraSpeed * Time.deltaTime));
        //transform.Translate(relativePos.forward * cameraSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.S))
    	transform.Translate(new Vector3(0, 0, -cameraSpeed * Time.deltaTime));
        //transform.Translate(-relativePos.forward * cameraSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.A))
    	transform.Translate(new Vector3(-cameraSpeed * Time.deltaTime, 0, 0));
        //transform.Rotate(relativePos.up, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.D))
        transform.Translate(new Vector3(cameraSpeed * Time.deltaTime, 0, 0));
        //transform.Rotate(relativePos.up, turnSpeed * Time.deltaTime);

	relativePos = target.position - transform.position;
	transform.rotation = Quaternion.RotateTowards(transform.rotation, target.rotation, Time.deltaTime * cameraSpeed);
}