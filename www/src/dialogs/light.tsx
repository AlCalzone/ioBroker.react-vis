import * as React from "react";
import { Dialog } from "../components/dialog";
import { IconButton } from "../components/iconButton";
import { Adjustments, Vacuum } from "../components/icons";
import { Slider } from "../components/slider";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export interface LightDialogProps {
	onClose?: () => void;
}

export const LightDialog: React.FC<LightDialogProps> = (props) => {
	const [test, setTest] = useIoBrokerState<boolean>({
		id: "zwave2.0.Node_017.Binary_Switch.currentValue",
		writeId: "zwave2.0.Node_017.Binary_Switch.targetValue",
		defaultValue: false,
	});
	return (
		<Dialog title="Licht &amp; Rollos" onClose={props.onClose}>
			<h2>Lichter</h2>
			<div className="icon-button-list">
				<IconButton
					label="Steckdose"
					icon={<Adjustments size={40} />}
					variant={test ? "active" : undefined}
					onClick={() => setTest(!test)}
				/>
				<IconButton label="Staubsauger" icon={<Vacuum size={40} />} variant="active" />
				<IconButton label="Licht &amp; Rollos" icon={<Adjustments size={40} />} />
				<IconButton label="Staubsauger" icon={<Vacuum size={40} />} variant="active" />
				<IconButton label="Licht &amp; Rollos" icon={<Adjustments size={40} />} />
			</div>
			<h2>Rollos</h2>
			<div className="slider-list">
				<Slider label="alle" value={test} />
				<Slider label="Wohnzimmer" value={75} />
				<Slider label="Küche" value={12} />
			</div>
		</Dialog>
	);
};
