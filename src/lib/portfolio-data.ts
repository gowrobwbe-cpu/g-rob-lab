import {
  Bot,
  Boxes,
  BrainCircuit,
  Cable,
  CircuitBoard,
  Cpu,
  Gauge,
  Lightbulb,
  Radio,
  RotateCw,
  Settings2,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

export const navItems = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Education", "education"], ["Projects", "projects"], ["AI Content", "ai-content"],
  ["Tech Lab", "tech-lab"], ["Journey", "journey"], ["Certificates", "certificates"],
  ["Contact", "contact"],
] as const;

export const components = [
  { id: "power", name: "Power", icon: Zap, type: "INPUT", detail: "Provides stable electrical energy to every part of the system." },
  { id: "esp32", name: "ESP32", icon: Cpu, type: "PROCESS", detail: "A Wi-Fi and Bluetooth microcontroller platform for connected electronics and IoT projects." },
  { id: "sensor", name: "Sensors", icon: Radio, type: "INPUT", detail: "Detect physical or environmental changes and send information to the controller." },
  { id: "processing", name: "Data Processing", icon: BrainCircuit, type: "PROCESS", detail: "Transforms sensor readings into useful decisions and control signals." },
  { id: "driver", name: "Motor Driver", icon: Settings2, type: "CONTROL", detail: "Safely translates controller signals into the current required by a motor." },
  { id: "motor", name: "N20 Motor", icon: RotateCw, type: "OUTPUT", detail: "A compact geared DC motor commonly used in small robotics and motion projects." },
  { id: "robot", name: "Robot", icon: Bot, type: "OUTPUT", detail: "The complete system where sensing, processing, and motion work together." },
] as const;

export const skills = [
  ["Electronics", "Circuits, components, and practical system building", CircuitBoard],
  ["Arduino", "Rapid prototyping and physical computing", Cpu],
  ["ESP32", "Connected control and IoT experimentation", Radio],
  ["ESP32-S3", "Advanced embedded and AI-ready exploration", BrainCircuit],
  ["Embedded Systems", "Hardware and software working as one", Boxes],
  ["Robotics", "Sensing, control, and mechanical movement", Bot],
  ["Circuit Design", "Structured electronic signal pathways", Cable],
  ["Sensors", "Reading real-world conditions and inputs", Gauge],
  ["Motor Control", "Driving controlled robotic movement", Settings2],
  ["Servo Motors", "Precise angular positioning", RotateCw],
  ["N20 Motors", "Compact geared motion systems", RotateCw],
  ["Microcontrollers", "Programmable electronic control", Cpu],
  ["PLC", "Industrial automation fundamentals", Workflow],
  ["AI Content Creation", "AI-assisted visual technology stories", Sparkles],
  ["Technical Content", "Clear explanations of complex ideas", Lightbulb],
] as const;

export const projects = [
  { title: "ESP32 Projects", description: "Microcontroller-based electronics and connected technology experiments.", tags: ["ESP32", "IoT", "Embedded"] },
  { title: "Arduino Projects", description: "Practical electronics, automation and prototype projects using Arduino.", tags: ["Arduino", "Sensors", "Prototyping"] },
  { title: "N20 Motor Projects", description: "Small-scale motion and robotics experiments using geared DC motors.", tags: ["N20", "Motion", "Control"] },
  { title: "Robotics Projects", description: "Hands-on robotics experiments combining electronics, control and mechanical movement.", tags: ["Robotics", "Electronics", "Control"] },
  { title: "Multimode Robot", description: "Robotics project exploring multiple operating modes and control concepts.", tags: ["Robot", "Modes", "Prototype"] },
  { title: "Myraa Robot", description: "Robotics concept and experimental project showcasing practical technology exploration.", tags: ["Concept", "Robot", "Experiment"] },
] as const;

export const labParts = [
  ["ESP32", "Runs connected control logic", "IoT and wireless systems", "ESP32 Projects", Cpu],
  ["ESP32-S3", "Handles advanced embedded tasks", "Connected and AI-ready devices", "Advanced experiments", BrainCircuit],
  ["Arduino", "Controls inputs and outputs", "Rapid electronics prototypes", "Arduino Projects", CircuitBoard],
  ["PCB", "Connects a circuit reliably", "Permanent electronic assemblies", "Circuit experiments", Cable],
  ["N20 Motor", "Creates geared rotary motion", "Compact mobile robots", "N20 Motor Projects", RotateCw],
  ["Servo Motor", "Moves to a controlled angle", "Arms and steering systems", "Robotics Projects", Gauge],
  ["Sensors", "Measure physical conditions", "Awareness and automation", "Multimode Robot", Radio],
  ["LED", "Provides visual output", "Status and signaling", "Arduino Projects", Lightbulb],
  ["Microcontroller", "Coordinates the system", "Embedded control", "Myraa Robot", Cpu],
  ["Components", "Shape and protect signals", "Every electronic circuit", "Electronics experiments", Boxes],
] as const;

export const journey = ["Electronics", "Arduino", "ESP32", "ESP32-S3", "Embedded Systems", "Robotics", "PLC", "AI Content Creation", "Advanced Technology Experiments"];

export const aiContent = [
  ["Electronics Explainers", "Clear visual breakdowns of circuits and components."],
  ["Robotics Content", "Short stories about sensing, control, and motion."],
  ["Technology Explainers", "Accessible ideas for curious technology learners."],
  ["AI-generated Videos", "Experimental visual narratives created with AI tools."],
  ["Futuristic Technology Concepts", "Ideas that connect present learning with future systems."],
  ["Short-form Educational Content", "Focused, visual lessons designed for quick learning."],
] as const;