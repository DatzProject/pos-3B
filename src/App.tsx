import { useState } from "react";

const COLORS = {
  bg: "#0f0e17",
  surface: "#1a1828",
  card: "#211f30",
  accent: "#f7c94b",
  success: "#4ade80",
  error: "#f87171",
  text: "#fffffe",
  muted: "#a7a9be",
  border: "#2e2c3e",
};

const ACCESS_CODE = "12161564449135502205440";

function AccessPage({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleSubmit = () => {
    if (input.trim() === ACCESS_CODE) {
      onUnlock();
    } else {
      setWrong(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        fontFamily: "'Courier New', Courier, monospace",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: COLORS.card,
          border: `1px solid ${wrong ? COLORS.error : COLORS.border}`,
          borderRadius: "18px",
          padding: "2.5rem 2rem",
          textAlign: "center",
          transition: "border-color 0.3s",
          animation: shake ? "shake 0.4s" : "none",
        }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: "0.8rem" }}>🗺️</div>
        <h1
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            color: COLORS.accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0 0 0.4rem",
          }}
        >
          POS 3
        </h1>
        <p
          style={{
            fontSize: "0.75rem",
            color: COLORS.muted,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Pos ke-3 · Harta Karun
        </p>

        <p
          style={{
            fontSize: "0.85rem",
            color: COLORS.muted,
            marginBottom: "1rem",
          }}
        >
          Masukkan kode akses untuk membuka pos terakhir
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setWrong(false);
          }}
          onKeyDown={handleKey}
          placeholder="Kode akses..."
          style={{
            width: "100%",
            background: COLORS.surface,
            border: `1.5px solid ${wrong ? COLORS.error : COLORS.border}`,
            borderRadius: "10px",
            color: COLORS.text,
            fontSize: "1rem",
            padding: "0.7rem 1rem",
            outline: "none",
            fontFamily: "inherit",
            fontWeight: "700",
            textAlign: "center",
            letterSpacing: "0.08em",
            boxSizing: "border-box",
            marginBottom: "0.6rem",
            transition: "border-color 0.2s",
          }}
        />

        {wrong && (
          <p
            style={{
              color: COLORS.error,
              fontSize: "0.78rem",
              marginBottom: "0.8rem",
              letterSpacing: "0.05em",
            }}
          >
            ✗ Kode salah, coba lagi!
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={input.trim() === ""}
          style={{
            width: "100%",
            padding: "0.85rem",
            borderRadius: "10px",
            border: "none",
            background: input.trim() !== "" ? COLORS.accent : COLORS.border,
            color: input.trim() !== "" ? COLORS.bg : COLORS.muted,
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: "0.95rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: input.trim() !== "" ? "pointer" : "not-allowed",
            opacity: input.trim() !== "" ? 1 : 0.6,
            marginTop: "0.4rem",
          }}
        >
          Buka Pos ke-3
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
      `}</style>
    </div>
  );
}

function TreasurePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        fontFamily: "'Courier New', Courier, monospace",
        boxSizing: "border-box",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Confetti particles */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20 + 5}%`,
              width: `${Math.random() * 10 + 6}px`,
              height: `${Math.random() * 10 + 6}px`,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              background: [
                "#f7c94b",
                "#4ade80",
                "#60a5fa",
                "#f472b6",
                "#a78bfa",
                "#fb923c",
              ][i % 6],
              animation: `fall ${Math.random() * 3 + 3}s linear ${
                Math.random() * 3
              }s infinite`,
              opacity: 0.85,
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "460px",
          background: COLORS.card,
          border: `2px solid ${COLORS.accent}`,
          borderRadius: "24px",
          padding: "3rem 2rem",
          boxShadow: `0 0 40px ${COLORS.accent}33`,
          animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Chest animation */}
        <div
          style={{
            fontSize: "5rem",
            animation: "bounce 1s ease-in-out infinite alternate",
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          💰
        </div>
        <div
          style={{
            fontSize: "2.5rem",
            animation: "spin 2s linear infinite",
            display: "inline-block",
            margin: "0 0.3rem",
          }}
        >
          ✨
        </div>
        <div
          style={{
            fontSize: "2rem",
            animation: "bounce 1.2s ease-in-out infinite alternate",
            display: "inline-block",
            margin: "0 0.3rem",
          }}
        >
          🏆
        </div>
        <div
          style={{
            fontSize: "2.5rem",
            animation: "spin 2s linear infinite reverse",
            display: "inline-block",
            margin: "0 0.3rem",
          }}
        >
          ✨
        </div>

        <h1
          style={{
            fontSize: "clamp(1.4rem, 5vw, 2rem)",
            fontWeight: "700",
            color: COLORS.accent,
            letterSpacing: "0.06em",
            margin: "1.5rem 0 0.8rem",
            lineHeight: 1.3,
            textTransform: "uppercase",
          }}
        >
          Selamat! 🎉
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            fontWeight: "700",
            color: COLORS.text,
            lineHeight: 1.6,
            margin: "0 0 1.5rem",
          }}
        >
          Anda berhasil mendapatkan harta karunnya!
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
          }}
        >
          {["🥇", "💎", "🌟", "🎊", "🪙", "🎯"].map((e, i) => (
            <span
              key={i}
              style={{
                animation: `bounce ${
                  0.8 + i * 0.15
                }s ease-in-out infinite alternate`,
                display: "inline-block",
              }}
            >
              {e}
            </span>
          ))}
        </div>

        <div
          style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "12px",
            padding: "0.9rem 1.2rem",
            color: COLORS.muted,
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          🏁 Semua pos telah diselesaikan!
        </div>
      </div>

      <style>{`
        @keyframes fall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0.85; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to   { transform: translateY(-12px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes popIn {
          0%   { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function MathQuiz3() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <TreasurePage />
  ) : (
    <AccessPage onUnlock={() => setUnlocked(true)} />
  );
}
