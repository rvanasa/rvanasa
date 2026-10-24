// Generates web-optimized background assets from media/ into public/media/.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const src = path.join(process.cwd(), "media");
const out = path.join(process.cwd(), "public", "media");
fs.mkdirSync(out, { recursive: true });

const run = (args) => execFileSync("ffmpeg", ["-y", "-v", "error", ...args], { stdio: "inherit" });
const scale = "scale=1920:-2";
const video = path.join(src, "MainVideo.mp4");

run(["-i", video, "-an", "-vf", scale, "-c:v", "libx264", "-crf", "28", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", path.join(out, "hero.mp4")]);
run(["-i", video, "-an", "-vf", scale, "-c:v", "libvpx", "-crf", "34", "-b:v", "1M", path.join(out, "hero.webm")]);
run(["-i", path.join(src, "MainVideo.jpg"), "-vf", scale, "-q:v", "5", path.join(out, "hero.jpg")]);
