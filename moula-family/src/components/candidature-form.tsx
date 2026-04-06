"use client";

import { useState, forwardRef, type InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface CandidatureData {
  prenom: string;
  pseudo: string;
  age: number;
  ville: string;
  motivation: string;
  tiktok: string;
  discord: string;
}

export function CandidatureForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CandidatureData>();

  const onSubmit = async (_data: CandidatureData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <CheckCircle className="w-16 h-16 mb-6" style={{ color: "#F7C948" }} />
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4 uppercase">
            CANDIDATURE ENVOYÉE
          </h2>
          <p style={{ color: "rgba(245, 240, 235, 0.5)" }} className="max-w-md">
            Merci pour ta candidature ! On revient vers toi sur Discord
            rapidement. En attendant, rejoins le serveur.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 relative p-12 overflow-hidden"
          style={{
            background: "#12121E",
            border: "1px solid rgba(255, 107, 53, 0.08)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(90deg, #FF6B35, #F7C948, #E84393)" }}
          />

          <h2 className="font-heading text-[22px] tracking-[2px] uppercase mb-8">
            Candidature
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FormField
              label="Prénom"
              error={errors.prenom?.message}
              {...register("prenom", {
                required: "Ton prénom est obligatoire",
                minLength: { value: 2, message: "Minimum 2 caractères" },
              })}
              placeholder="Ton prénom"
            />
            <FormField
              label="Pseudo"
              error={errors.pseudo?.message}
              {...register("pseudo", {
                required: "Ton pseudo est obligatoire",
                minLength: { value: 2, message: "Minimum 2 caractères" },
              })}
              placeholder="Ton pseudo"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FormField
              label="Âge"
              type="number"
              error={errors.age?.message}
              {...register("age", {
                required: "Indique ton âge",
                valueAsNumber: true,
                min: { value: 13, message: "Tu dois avoir au moins 13 ans" },
                max: { value: 99, message: "Âge invalide" },
              })}
              placeholder="Ton âge"
            />
            <FormField
              label="Ville"
              error={errors.ville?.message}
              {...register("ville", {
                required: "Indique ta ville",
                minLength: { value: 2, message: "Minimum 2 caractères" },
              })}
              placeholder="Ta ville"
            />
          </div>

          <FormField
            label="Discord"
            error={errors.discord?.message}
            {...register("discord", {
              required: "Ton pseudo Discord est obligatoire",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            placeholder="Ton pseudo Discord (ex: moula#1234)"
          />

          <FormField
            label="TikTok (optionnel)"
            error={errors.tiktok?.message}
            {...register("tiktok")}
            placeholder="https://tiktok.com/@tonpseudo"
          />

          <div>
            <label
              className="block font-heading text-[12px] uppercase tracking-[2px] mb-3"
              style={{ color: "rgba(245, 240, 235, 0.5)" }}
            >
              Pourquoi rejoindre la famille Moula ?
            </label>
            <textarea
              {...register("motivation", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 20,
                  message: "Dis-nous en un peu plus (minimum 20 caractères)",
                },
              })}
              rows={5}
              placeholder="Dis-nous pourquoi tu veux nous rejoindre, ce que tu apportes..."
              className="w-full px-4 py-3.5 text-sm transition-all duration-300 resize-none outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,107,0,0.2)",
                color: "#F5F0EB",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#FF6B00";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 107, 0, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,107,0,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.motivation?.message && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.motivation.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="btn-clip-left w-full flex items-center justify-center gap-3 h-14 font-heading text-[18px] tracking-[3px] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "#FF6B00",
              color: "#000000",
            }}
          >
            {isSubmitting ? (
              <div
                className="w-5 h-5 rounded-full animate-spin"
                style={{ border: "2px solid rgba(10,10,18,0.3)", borderTopColor: "#0A0A12" }}
              />
            ) : (
              "ENVOYER MA CANDIDATURE"
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label
        className="block font-heading text-[12px] uppercase tracking-[2px] mb-3"
        style={{ color: "rgba(245, 240, 235, 0.5)" }}
      >
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className="w-full px-4 py-3.5 text-sm transition-all duration-300 outline-none"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,107,0,0.2)",
          color: "#F5F0EB",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#FF6B00";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 107, 0, 0.08)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,107,0,0.2)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  )
);

FormField.displayName = "FormField";
