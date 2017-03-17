var smoothMovement : float;
private var targetPosition : Vector3;

function FixedUpdate () {
    if(Input.GetKeyDown(KeyCode.Mouse0) || Input.GetKey(KeyCode.Mouse0)) {
	    var playerPlane = new Plane(Vector3.up, transform.position);
	    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	    var hitDist = 0.0;
	        if(playerPlane.Raycast (ray, hitDist)) {
	            var targetPoint = ray.GetPoint(hitDist);
	            targetPosition = ray.GetPoint(hitDist);
	            var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
	            transform.rotation = targetRotation;
	            }
	    	}
	transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * smoothMovement);
}