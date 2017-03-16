var cameraSpeed = 30.00;
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
		transform.Rotate(relativePos.up * Time.deltaTime * cameraSpeed, Space.World);

	if (Input.GetButton("Rotate Camera Left"))
		transform.Rotate(relativePos.down * Time.deltaTime * cameraSpeed, Space.World);

	relativePos = target.position - transform.position;
	transform.rotation = Quaternion.RotateTowards(transform.rotation, target.rotation, Time.deltaTime * cameraSpeed);
	Debug.Log(relativePos);
}