var cameraSpeed = 1.00;
var interfaceSize = 25;

function Update () {
var screenBottom = Rect (0, 0, Screen.width, interfaceSize);
var screenTop = Rect (0, Screen.height-interfaceSize, Screen.width, interfaceSize);
var screenLeft = Rect (0, 0, interfaceSize, Screen.height);
var screenRight = Rect (Screen.width-interfaceSize, 0, interfaceSize, Screen.height);

	if (screenBottom.Contains(Input.mousePosition))
		transform.Translate(0, 0, -cameraSpeed, Space.World);

	if (screenTop.Contains(Input.mousePosition))
		transform.Translate(0, 0, cameraSpeed, Space.World);

	if (screenLeft.Contains(Input.mousePosition))
		transform.Translate(-cameraSpeed, 0, 0, Space.World);

	if (screenRight.Contains(Input.mousePosition))
		transform.Translate(cameraSpeed, 0, 0, Space.World);
}
